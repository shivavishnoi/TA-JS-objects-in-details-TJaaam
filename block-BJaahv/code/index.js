// function Project(name, id, noOfProjects) {
//   this.name = name;
//   this.id = id;
//   this.noOfProjects = noOfProjects;
// }
// Project.prototype = {
//   getProjects() {
//     return this.noOfProjects
//   },
//   changeName(newName) {
//     this.name = newName
//   },
//   incrementProject() {
//     ++this.noOfProjects
//   },
//   decrementProject() {
//     --this.noOfProjects
//   }
// }

class Project {
  constructer(name, id, noOfProjects) {
    this.name = name;
    this.id = id;
    this.noOfProjects = noOfProjects;
  }
  getProjects() {
    return this.noOfProjects
  }
  changeName(newName) {
    this.name = newName
  }
  incrementProject() {
    ++this.noOfProjects
  }
  decrementProject() {
    --this.noOfProjects
  }
}

let try1 = new Project(`shiva`, 25, 2311)
let try2 = new Project(`Nishi`, 25, 2312)