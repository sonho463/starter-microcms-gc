import React from "react"
import styled from "styled-components"

export default function MicroCmsImg(props) {
  // imgタグを親要素に対して幅いっぱいに表示する
	// レスポンシブ対応　top 50,left 50,transform でマイナス
  const ImgWrapper = styled.img`
    width: 100%;
		min-width:1200px;
		position: absolute;
		top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `

	const { url } = props // 画像のURL


  // url以外のパラメータを１つの文字列型変数にセット
	// eslint mapを使うときには、最後にreturnで値を返してください
  let array = Object.values(props)
  let param = ""
  array.map(function (a) {
    if (array.indexOf(a) !== 0) {
      if (array.indexOf(a) === 1) {
        param = `?${a}`
      } else {
        param = `${param}&${a}`
      }
    }
		return param
  })
  return (
    <>
			<ImgWrapper src={url + param} alt="" />
    </>
  )
}
