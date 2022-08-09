import React from 'react'
import 'antd/dist/antd.css'
import { Carousel } from 'antd'

function Antd() {
  return (
    <div>
      <Carousel className="w-[800px] mx-auto my-[10px]">
        <div>
          <div
            style={{
              height: '160px',
              color: '#fff',
              lineHeight: '160px',
              textAlign: 'center',
              background: '#364d79',
            }}
          >
            1
          </div>
        </div>
        <div>
          <div
            style={{
              height: '160px',
              color: '#fff',
              lineHeight: '160px',
              textAlign: 'center',
              background: '#364d79',
            }}
          >
            2
          </div>
        </div>
        <div>
          <div
            style={{
              height: '160px',
              color: '#fff',
              lineHeight: '160px',
              textAlign: 'center',
              background: '#364d79',
            }}
          >
            3
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Antd
