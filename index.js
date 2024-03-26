#!/usr/bin/env node
import chalk from "chalk"

let word = process.argv[2]

// fetch data from the api
const getData = async () => {
  let response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
  let data = await response.json()
  printdata(data)
  
}

// parse and print the required data
const printdata = (val) =>{
  if (val) {
    const meanings = val[0].meanings;
    meanings.forEach(meaning => {
        const definitions = meaning.definitions;
        definitions.forEach(definition => {
            console.log(
              chalk.yellowBright(definition.definition || '')  
              );
        });
    });
}

}


getData()


