import React from "react"

export default function MicroCmsImg(props) {

  const { width, compress, fill, url } = props
	// const param=""

	// props.map((prop)=>{
	// 	if(!url){
	// 		param = `${param}&${prop}`
	// 	}

	// }

	// )

  return (
    <>
      <h1>image</h1>
			<p>{url}{width}{compress}{fill}</p>
      <img src={`${url}?${width}&${compress}&${fill}`} alt="" />
			{/* <img src={`${url}?${param}`} alt=""/> */}
    </>
  )
}
