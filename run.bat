set MONGO_URL=mongodb://keynote:test123@127.0.0.1:27017/keynote
set MAIL_URL=smtp://az84smr01.am.freescale.net:25
set PRERENDER_SERVICE_URL=http://127.0.0.1:3000/
set PRERENDER_TOKEN=28Ox9IDvKnZHjdhfD2hQ
:: set METEOR_SETTINGS=$(cat /path/to/settings.json)   FOR PRODUCTION
::meteor --settings settings.json
meteor --port 8000
