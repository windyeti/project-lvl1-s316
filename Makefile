install:
    npm i

start:
    npm run babel-node -- src/bin/brain-games.js

lint:
    npm run eslint .

publish:
	npm publish
