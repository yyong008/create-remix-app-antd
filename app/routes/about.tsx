import { InputNumber } from "antd"
import { useEffect, useLayoutEffect } from "react"
export default function About() {

  console.log(process.env.NODE_ENV)
  return <div>About page
    <InputNumber />
  </div>
}


