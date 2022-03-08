import TopicsList from './TopicsList'
export default function Selector () {
    return (
        <select name="Categories" id="Categories" onClick= {(e) => {setChosenCategory(e.target.value)}}>
                <option value="All">All</option>
                <TopicsList/>
                {/* <option value="Electronics">Electronics </option>
                <option value="Household">Household</option>
                <option value="Clothing">Clothing</option> */}
            </select>
    )
}