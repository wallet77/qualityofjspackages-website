const path = require('path')
const folder = path.join(__dirname, '../public/data/')
const fs = require('fs')

fs.promises.readdir(folder).then(async data => {
    const list = []
    data.forEach(element => {
        list.push(element.replace('.json', ''))
    })

    // sort by date
    list.sort((a,b) => {
        return new Date(b.date) - new Date(a.date)
    })

    await fs.promises.writeFile(path.join(__dirname, '../src/resources/reportList.json'), JSON.stringify(list), 'utf-8')

    console.log('Reports list generated!')
})