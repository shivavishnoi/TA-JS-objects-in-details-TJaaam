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

// class Project {
//   constructor(name, id, noOfProjects) {
//     this.name = name;
//     this.id = id;
//     this.noOfProjects = noOfProjects;
//   }
//   getProjects() {
//     return this.noOfProjects;
//   }
//   changeName(newName) {
//     this.name = newName
//   }
//   incrementProject() {
//     ++this.noOfProjects
//   }
//   decrementProject() {
//     --this.noOfProjects
//   }
// }

// let try1 = new Project(`shiva`, 25, 2311)
// let try2 = new Project(`Nishi`, 25, 2312)

let projectMethods = {
  getProjects() {
    return this.noOfProjects;
  },
  changeName(newName) {
    this.name = newName
  },
  incrementProject() {
    ++this.noOfProjects
  },
  decrementProject() {
    --this.noOfProjects
  }
}

function project(name, id, noOfProjects) {
  let obj = Object.create(projectMethods);
  obj.name = name;
  obj.id = id;
  obj.noOfProjects = noOfProjects;
  return obj
}
let try1 = project(`shiva`, 25, 2311)
let try2 = project(`Nishi`, 25, 2312)