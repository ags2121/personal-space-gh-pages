s3Bucket = 'https://s3.amazonaws.com/personal-space-band-site/';

pad = (num, size) => ('000000000' + num).substr(-size);

photosHtml = Array.from({length: 13}, (x,i) => '<img src="' + s3Bucket + 'ps' + pad(i+1, 2) + '.jpg">').join('\n');

document.querySelector('.pix div').innerHTML = photosHtml;
document.addEventListener('click', e => document.querySelector('body').classList.add('no-back'));

document.querySelectorAll('.menu li > a:not(.buy), a.mail').forEach(i => i.addEventListener('click', e => makeComponentActive(i.classList[0])));

makeComponentActive = (name) => {
    document.querySelectorAll('.components > div').forEach(i => i.classList.add('hidden'));
    document.querySelector('.components .' + name).classList.remove('hidden');
}
