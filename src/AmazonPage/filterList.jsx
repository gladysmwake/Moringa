function FilterList(){
    return(
        <section className="filter-block">
            <h3>Condition</h3>
            <label className="filter-item">
                <input type="checkbox" />
                <span>New</span>
            </label>
            <label className="filter-item">
                <input type="checkbox" />
                <span>Renewed</span>
            </label>
            <label className="filter-item">
                <input type="checkbox" />
                <span>Used</span>
            </label>
        </section>
    );
}

export default FilterList;
