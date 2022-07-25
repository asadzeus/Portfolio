import './Project.css'

export default function Project({name,img}) {
  return (
    <div className='project'><a href="">
        <div className="title-container">
          <h1 className="website-title">{name}</h1>
        </div>
        <div className="img-container">
          <img src={img} alt="" className='website-img'/>
        </div>
        </a>
    </div>
  )
}
