const {ipcRenderer} = window.require('electron')


const openFileDialog = async () => {
  return new Promise((resolve, reject) => {
    ipcRenderer.on('select-image-reply', (event, arg) => {
      resolve(arg)
    })
    ipcRenderer.send('select-image')
  })
};

export default {
  openFileDialog
};
