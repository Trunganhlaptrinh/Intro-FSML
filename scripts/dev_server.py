from http.server import SimpleHTTPRequestHandler, ThreadingHTTPServer
from pathlib import Path
from urllib.parse import unquote, urlsplit


ROOT = Path(__file__).resolve().parent.parent


class SafeStaticHandler(SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=str(ROOT), **kwargs)

    def translate_path(self, path):
        decoded_path = unquote(urlsplit(path).path).replace("\\", "/")
        segments = [segment for segment in decoded_path.split("/") if segment]
        if any(segment.startswith(".") for segment in segments):
            return str(ROOT / "__blocked_hidden_path__")
        return super().translate_path(decoded_path)


if __name__ == "__main__":
    address = ("127.0.0.1", 8000)
    with ThreadingHTTPServer(address, SafeStaticHandler) as server:
        print(f"Serving {ROOT} at http://{address[0]}:{address[1]}/website/")
        print("Hidden paths are blocked. Press Ctrl+C to stop.")
        try:
            server.serve_forever()
        except KeyboardInterrupt:
            print("\nStopped.")
