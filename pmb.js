//
var blobMe= URL['createObjectURL'](new Blob([''], {type: 'text/html'}));
var elIframe = document['createElement']('iframe');
elIframe['setAttribute']('frameborder', '0');
elIframe['setAttribute']('width', '100%');
elIframe['setAttribute']('height', '100%');
elIframe['setAttribute']('allowfullscreen', 'true');
elIframe['setAttribute']('webkitallowfullscreen', 'true');
elIframe['setAttribute']('mozallowfullscreen', 'true');
elIframe['setAttribute']('src', blobMe);
var idOne= 'gepa_'+ Date.now();
elIframe['setAttribute']('id', idOne);
document.getElementById('html-id').appendChild(elIframe);
const iframeHere= 'https://other-ladida.blogspot.com/p/pembelajaran-mandiri.html';
document['getElementById'](idOne)['contentWindow']['document'].write('<script type="text/javascript">location.href = "' + iframeHere + '";\x3c/script>');
