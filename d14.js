/*
 Given a source word, target word and an English dictionary, transform the source word to target
 by changing/adding/removing 1 character at a time, while all intermediate words being valid
 English words. Return the transformation chain which has the smallest number of
 intermediate words.
 */

class WordChains {
  constructor(start, finish, dictionary) {
    this.start = start;
    this.finish = finish;
    this.dict = dictionary.filter(word => word.length === start.length);
  }
  
  bfs() {
    let queue = [new Word(this.start, dict)];
    while (queue.length) {
      let currWord = queue.shift();
      if (currWord.word === this.finish) {
        return currWord;
      }
      currWord.findChildren();
      let currChildren = currWord.children;
      queue.push(...currChildren);
    }
    return null;
  } 

  findPath(word) {
    let path = [];
    let currWord = word;
    while (currWord) {
      path.push(currWord);
      currWord = currWord.parent;
    }

    return path;
  }


  solve() {
    let bfsResult = this.bfs();
    if (bfsResult) {
      return findPath(bfsResult)
    } else {
      return null;
    }
  }

}

class Word {
  constructor(word, dict, parent = null, children = []) {
    this.word = word;
    this.parent = parent; 
    this.children = children;
    this.dict = dict;
  }

  findChildren() {
    for (let i = 0; i < this.word.length; i++) {
      let currSlice = this.word.slice(0, i) + this.word.slice(i + 1);
      let currChildren =this.dict.filter(el => {
        let slicedWord =  el.slice(0, i) + el.slice(i + 1);
        return slicedWorld === currSlice && this.word[i] !== el[i];
      });

      this.children.push(...currChildren) 
    }
    this.children = this.children.map(child => new World(child, this.dict, this.word));
  }

}
