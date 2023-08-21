const ResultItem = (
    {
      cargo = {
        name: "cat1",
        briefDesc: "",
        desc: "cat2",
        img: "cat3",
        sales: 1234,
        price: 12
      }
    }
) => {
    return(
        <div>
            <li className="list-group-item">
                <div className="row" >
                    <div className="col-1">
                        <img width={40} className="rounded-3" src={`/images/${cargo.img}`}/>
                        
                    </div>
                    <div className="col-11">
                        <div className="fw-bold">{cargo.name}</div>
                        <div>{cargo.desc}</div>
                        <div>Sold: {cargo.sales}</div>
                    </div>
                </div>
            </li>

        </div>
    );
};
export default ResultItem