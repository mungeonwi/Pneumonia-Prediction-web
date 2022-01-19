const tf = require('@tensorflow/tfjs-node');

const model = tf.sequential();

model.add(tf.layers.conv2d({
  inputShape: [256, 256, 1],
  kernelSize: [3, 3],
  filters: 32,
  padding: 'same',
  activation: 'relu',
}))
model.add(tf.layers.maxPooling2d({
  strides: [2, 2]
}))
model.add(tf.layers.conv2d({
  kernelSize: [3, 3],
  filters: 32,
  padding: 'same',
  activation: 'relu',
}))
model.add(tf.layers.maxPooling2d({
  strides: [2, 2]
}))
model.add(tf.layers.conv2d({
  kernelSize: [3, 3],
  filters: 64,
  padding: 'same',
  activation: 'relu',
}))
model.add(tf.layers.maxPooling2d({
  strides: [2, 2]
}))


model.add(tf.layers.conv2d({
  kernelSize: [3, 3],
  filters: 64,
  padding: 'same',
  activation: 'relu',
}))
model.add(tf.layers.maxPooling2d({
  strides: [2, 2]
}))
model.add(tf.layers.flatten({}))

model.add(tf.layers.dense({
  units: 128,
  activation: 'relu',
}))
model.add(tf.layers.dropout({rate: 0.5}))
model.add(tf.layers.dense({
  units: 128,
  activation: 'relu',
}))
model.add(tf.layers.dropout({rate: 0.5}))
model.add(tf.layers.dense({
  units: 2,
  activation: 'softmax',
}))

model.compile({
  optimizer: 'adam',
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy'],
})

const optimizer = tf.train.adam(0.0001);
model.compile({
  optimizer: optimizer,
  loss: 'categoricalCrossentropy',
  metrics: ['accuracy'],
});

module.exports = model;