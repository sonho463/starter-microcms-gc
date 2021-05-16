import React from "react"
import styled from "styled-components"

export default function MicroCmsImg(props) {
  // imgタグを親要素に対して幅いっぱいに表示する
  const ImgWrapper = styled.img`
    width: 100%;
  `
	const { url } = props // 画像のURL
  // url以外のパラメータを１つの文字列型変数にセット
  let array = Object.values(props)
  let param = ""
  array.map(function (a) {
    if (array.indexOf(a) !== 0) {
      if (array.indexOf(a) == 1) {
        param = `?${a}`
      } else {
        param = `${param}&${a}`
      }
    }
  })

	// const srcset=(width,dpr)=>`?w=${width}&dpr=${dpr} ${dpr}x`

  return (
    <>
			<ImgWrapper
			srcset={`
			${url}?w=400&dpr=1 1x,
			${url}?w=400&dpr=2 2x,
			${url}?w=400&dpr=3 3x
			`}

			src={url + param} alt="" />
    </>
  )
}
