// Another project from Codecademy's Full-Stack Engineer Career Path


// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  }
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  }
  
  
  // Task 4 + Task 5
  
  const pAequorFactory = (num, arr) => {
    return {
      specimenNum: num,
      dna: arr,
      mutate() {
        // console.log('enter .mutate() ' + this.dna)
        let randIn = Math.floor(Math.random() * this.dna.length)
        let ranBase = returnRandBase()
        while (this.dna[randIn] == ranBase) {
          randIn = Math.floor(Math.random() * this.dna.length)
          ranBase = returnRandBase()
        }
        this.dna[randIn] = ranBase
        // console.log('exit .mutate() ' + this.dna)
        return this.dna
      },
      compareDNA(obj) {
        let count = 0
        let matches = []
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] == obj.dna[i]) {
            count++
            matches.push(`match: ${this.dna[i]}`)
          } else {
            matches.push(`no match: ${this.dna[i]} ≠ ${obj.dna[i]}`)
          }
        }
        let similarity = (count / this.dna.length) * 100
        // console.log(matches)
        // console.log(`Specimen ${this.specimenNum} and ${obj.specimenNum} have ${count} elements in common and therefore, have ${similarity.toFixed(2)}% of their DNA in common.`)
      },
      willLikelySurvive() {
        let goodBases = 0
        let weGood = false
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] == 'C' || this.dna[i] == 'G') {
            goodBases++
          }
        }
        let survive = (goodBases / this.dna.length) * 100
        // console.log(goodBases)
        if (survive >= 60) {
          weGood = true
        }
        // console.log(`${weGood}, ${survive}% of the bases are C and G bases.`)
        return weGood
      }
    }
  }
  let testDna = mockUpStrand()
  let testFact = pAequorFactory(5, testDna)
  // testFact.mutate()
  // testDna = mockUpStrand()
  // let testFact2 = pAequorFactory(6, testDna)
  // testFact.compareDNA(testFact2)
  // testFact.willLikelySurvive()
  
  // Task 7
  // Using the pAequorFactory add 30 instances of pAequor to an array as long as their chances of survival are at least 60%
  
  let vileBeasts = []
  let excitingNum = 0
  while (vileBeasts.length < 30) {
    excitingNum++
    let dna = mockUpStrand()
  
    let paequ = pAequorFactory(excitingNum, dna)
  
    if (paequ.willLikelySurvive() == true) {
      vileBeasts.push(paequ)
    }
  }
  console.log(vileBeasts.length)
  
  