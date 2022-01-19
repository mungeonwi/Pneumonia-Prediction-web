const tf = require('@tensorflow/tfjs');
const fs = require('fs');
const path = require('path');

const TRAIN_IMAGES_DIR = 'C:\\Users\\mgw15\\Desktop\\ossp2\\data\\train';
const TEST_IMAGES_DIR = 'C:\\Users\\mgw15\\Desktop\\ossp2\\data\\test';

function loadImages(dataDir) {
  const images = [];
  const labels = [];
  
  var files = fs.readdirSync(dataDir);
  for (let i = 0; i < files.length; i++) { 
    if (!files[i].toLocaleLowerCase().endsWith(".jpeg")) {
      continue;
    }

    var filePath = path.join(dataDir, files[i]);
    
    var buffer = fs.readFileSync(filePath);
    var imageTensor = tf.node.decodeImage(buffer)
      .resizeNearestNeighbor([96,96])
      .toFloat()
      .div(tf.scalar(255.0))
      .expandDims();
    images.push(imageTensor);
    
    // here we assume every folder has file with name n_flower.png
    var NORMAL = files[i].toLocaleLowerCase().endsWith("NORMAL.jpeg");
    var PNEUMONIA = files[i].toLocaleLowerCase().endsWith("PNEUMONIA.jpeg");
    
    
    if( NORMAL == true){ labels.push(1)}
    else if(PNEUMONIA == true){labels.push(0)}
    //else{labels.push(0)}

  }
  console.log('Labels are');
  console.log(labels);
  return [images, labels];
}

/** Helper class to handle loading training and test data. */
class PneumoniaDataset {
  constructor() {
    this.trainData = [];
    this.testData = [];
  }

  /** Loads training and test data. */
  loadData() {
    console.log('Loading images...');
    this.trainData = loadImages(TRAIN_IMAGES_DIR);
    this.testData = loadImages(TEST_IMAGES_DIR);
    console.log('Images loaded successfully.')
  }

  getTrainData() {
    return {
      
      images: tf.concat(this.trainData[0]),
      labels: tf.oneHot(tf.tensor1d(this.trainData[1], 'int32'), 2).toFloat() // here 5 is class
      
    }
  }

  getTestData() {
    return {
      images: tf.concat(this.testData[0]),
      labels: tf.oneHot(tf.tensor1d(this.testData[1], 'int32'), 2).toFloat()
    }
  }
}
module.exports = new PneumoniaDataset();
console.log('All done.')