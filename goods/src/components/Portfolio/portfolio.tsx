import { Project, projectList } from './db/portfolio'

class Portfolio {

    filters: string[]
    selected: string
    projectList: Project[]

    constructor (filters: string[], selected: string, projectList: Project[]) {
        this.filters = filters
        this.selected = selected
        this.projectList = projectList
    }

    onSelectFilter (filter: string):Project[] {
        this.selected = filter
        if (filter==='All' || filter==='') return this.projectList
        return this.projectList.filter((project) => project.category === filter)
    }

}

const portfolio = new Portfolio(['All', 'Websites', 'Flayers', 'Business Cards'], 'All', projectList)

export function Toolbar ({ filter }: { filter: string }) {

    return (
        <div>{portfolio.onSelectFilter(filter).map((obj, index) => <img key={index} src={obj.img} className='img' alt="какая то картинка" />)}</div>
    )
}
