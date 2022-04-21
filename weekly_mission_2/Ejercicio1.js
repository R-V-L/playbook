const repo = {
    name: "LaunchX",
    author: "carlogilmar",
    language: "JavaScript",
    numberOfCommits: 100,
    stars: 199,
    forks: 299,
    issues_open: 10,
    issues_close: 10,
    getTotalIssues: function () {
        return this.issues_open + this.issues_close
    },
    getGeneralInfo: function () {
        return `This repository ${this.name} was created by ${this.author}`
    }
}

console.log("Nombre del repo:" + repo.name)
console.log("Issues totales: " + repo.getTotalIssues())
console.log(repo.getGeneralInfo())

const issue = {
    title: "Error en el código",
    repositoryNameAssociated: "LaunchX",
    status: "open",
    numberOfComments: 10,
    labels: ["bug", "error"],
    author: "r-v-l",
    dateCreated: "2022-04-01",
    lastUpdated: "2022-04-01",
    getTitleAndAuthor: function () {
        return `${this.title} - ${this.author}`
    },
    getGeneralInfo: function () {
        return `This issue - ${this.title} - was created by ${this.author}`
    }
}

console.log("Nombre del issue: " + issue.title)
console.log("El titulo y autor del issue: " + issue.getTitleAndAuthor())
console.log(issue.getGeneralInfo())

const pullRequest = {
    title: "Pls acepta el cambio",
    branchName: "master",
    dateCreated: "2022-04-01",
    status: "open",
    repositoryNameAssociated: "LaunchX",
    getStatus: function () {
        return `El estado del pull request es: ${this.status}`
    },
    getTitleAndAuthor: function () {
        return `${this.title} - ${this.branchName}`
    }
}

console.log("Nombre del pull request: " + pullRequest.title)
console.log("El estado del pull request: " + pullRequest.getStatus())
console.log("El titulo y autor del pull request: " + pullRequest.getTitleAndAuthor())

// Uber

const profile = {
    name: "Ricardo",
    lastName: "V",
    age: "28",
    rating: "4.5",
    getFullName: function () {
        return `${this.name} ${this.lastName}`
    },
    getGeneralInfo: function () {
        return `${this.getFullName()} - ${this.age} - ${this.rating}`
    }
}

const travel = {
    origin: "La Condesa",
    destination: "Toluca",
    date: "2022-04-01",
    distance: "59km",
    getGeneralInfo: function () {
        return `${this.origin} - ${this.destination} - ${this.date} - ${this.distance}`
    },
    getOriginAndDestination: function () {
        return `${this.origin} - ${this.destination}`
    }
}

console.log("Nombre completo: " + profile.getFullName())
console.log("Información general: " + profile.getGeneralInfo())
console.log("Origen y destino: " + travel.getOriginAndDestination())
console.log("Información general: " + travel.getGeneralInfo())