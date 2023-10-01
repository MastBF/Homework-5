let Pagination = {
    array:[],
    index:0,
    prevPage() {
        --this.index
    },
    nextPage() {
       ++this.index
       return this
    },
    firstPage() {
        this.index = 0
    },
    lastPage() {
        this.index = this.array.length - 1
    },
    goToPage(num) {
        this.index = num - 1
    },
    getPageItems() {
        return this.array[this.index]
    },
    init(arr2, num, arr3 = []) {
    let len = Math.round(arr2.length / 4)
    for(let i = 0; i < len; i++) {    
      for(let i = 0; i < num; i++) {
        if( typeof arr2[i] === 'undefined') break
        arr3.push(arr2[i])
      }
        arr2 = arr2.slice(4)
        this.array.push(arr3)
        arr3 = []
    }

    }
}


const alphabetArray = "abcdefghijklmnopqrstuvwxyz".split("");
Pagination.init(alphabetArray, 2);
console.log(Pagination.getPageItems()); // ["a", "b", "c", "d"]
Pagination.nextPage()
Pagination.nextPage().nextPage()

Pagination.goToPage(3);
console.log(Pagination.getPageItems()) // ["e", "f", "g", "h"]
console.log(Pagination.index)
