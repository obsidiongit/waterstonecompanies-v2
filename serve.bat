@echo off
echo Starting local preview server...
echo.
echo Open:  http://localhost:3000/
echo Use HTTP not HTTPS. Run only ONE server on 3000 ^(a second Python on the same port can break the page^).
echo Press Ctrl+C to stop.
echo.
python -m http.server 3000
pause
