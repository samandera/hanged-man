# multilingual-hangedman-flashcards

Setup
---

```
npm install
```

Sass
---

It's necessary to have webpack installed globally in order to use watching sass with webpack.

```
sudo npm install -g webpack --save-dev
```

Installing Sass loaders

```
npm install sass-loader node-sass webpack --save-dev
npm install style-loader
npm install css-loader
```

Fonts loader
---

```
npm install --save-dev file-loader
```

Babel spread loader plugin
---

```
npm install --save-dev babel-plugin-transform-object-rest-spread
```

Adding tests
---

```
npm install --save-dev jest
npm install --save-dev babel-jest

```

For testing with events

```
npm install trigger-event
```


Compile
---

```
npm run compile
```



Usage
---

Watching sass. The process runs in a separate terminal than development server.

```
webpack --watch
```


Start the development server with this command:

```
npm start
```
