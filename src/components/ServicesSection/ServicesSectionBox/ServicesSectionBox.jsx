import './ServicesSectionBox.css'

const ServicesSectionBox = ({ data }) => {
    return (
        <div className='ServicesSetionBox'>
                {data.map((e) => {
                    return <div className="ServicesSectionCard">
                        <div className="ServiceSectionBoxIcon">
                            <i className="ri-verified-badge-line"></i>
                        </div>
                        <div className="ServiceSectionBoxData">
                            <h3>{e.heading}</h3>
                            <p>{e.para}</p>
                        </div>
                    </div>
                    })}
        </div>
    )
}

export default ServicesSectionBox
