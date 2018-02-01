s3Bucket = 'https://s3.amazonaws.com/personal-space-band-site/';

pad = (num, size) => ('000000000' + num).substr(-size);

photosHtml = Array.from({length: 13}, (x,i) => '<img src="' + s3Bucket + 'ps' + pad(i+1, 2) + '.jpg">').join('\n');

document.querySelector('.pix div').innerHTML = photosHtml;
