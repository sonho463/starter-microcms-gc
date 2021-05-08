import React from "react"

export default function MicroCmsImg(props) {

  const { width, compress, fill, url } = props

	let array = Object.values(props)

	let param = ""

	array.map(function(a){
		if(array.indexOf(a) !== 0){
			if(array.indexOf(a) == 1){
				param=`?${a}`
			}else{
				param=`${param}&${a}`
			}
		}
	})

  return (
    <>
      {/* <h1>eye_catch</h1>
			<p>{url + param}</p> */}
			<img src={url+param} alt=""/>
    </>
  )
}
