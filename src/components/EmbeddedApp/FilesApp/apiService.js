/* 
Class to incapsulate all network code.
Asynchronous data source for app components.
Uses class properties stage 3 proposal 
(need @babel/plugin-proposal-class-properties for this to work).
*/
import fileSystem from './fileSystem'


class ApiService {
  files = fileSystem

  getResponsePromise = (result) => {
    return new Promise(
      function(resolve, reject) {
        setTimeout(() => resolve(result), 0 * Math.random())
      }
    )
  }
  
  getFilesByFolderId = async (id) => {
    console.log("getting files by folder ID", id)
    let files = this.files.filter(file => file.parentId === id)
    return await this.getResponsePromise(files)
  }

  getFolderById = async (id) => {
    console.log("getting folder by folder ID", id)
    let folder = this.files.find(file => file.id === id)
    return await this.getResponsePromise(folder)
  }
}

export default ApiService