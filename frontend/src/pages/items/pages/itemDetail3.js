import React, { useState, useEffect } from 'react'
// import "../assets/css/bootstrap.min.css"
import './itemDetail3.css'
import { withRouter } from 'react-router-dom'
import itemImage from '../img/504.jpg'
import itemImage1 from '../img/5042.jpg'
import itemImage2 from '../img/5043.jpg'
import leftImage from '../img/left.png'
import rightImage from '../img/right.png'
import titleBoxImage from '../img/title-box.png'
import heartImage from '../img/heart.png'
import cartImage from '../img/cart.png'
import btnFavImage from '../img/btn-fav.png'
import ItemCard from '../components/itemCards/ItemCard'
import { Modal, Button } from 'react-bootstrap'
// import { item1, item2, item3, item4, item5, item6, item7, item8 } from "../itemData"
import {
  item1,
  item2,
  item3,
  item4,
  item5,
  item6,
  item7,
  item8,
} from '../components/itemCards/itemData1'

// import {Carousel} from "react-bootstrap";
// // 引入图片
// import image1 from "../img/1.png";
// import image2 from "../img/2.jpg";
const midImage = {
  width: '80px',
  margin: '5px',
}
const itemStyle = {
  width: '17rem',
  border: '0px',
}

const ItemDetail3 = (props) => {
  const [Mycart, setMycart] = useState([])
  const [show, setShow] = useState(false)
  const [productName, setProductName] = useState('')

  const handleClose = () => setShow(false)
  const handleShow = () => setShow(true)

  const updateCartToLocalStorage = (item) => {
    const currentCart = JSON.parse(localStorage.getItem('cart')) || []

    // find if the product in the localstorage with its id
    const index = currentCart.findIndex((v) => v.itemId === item.itemId)
    console.log(currentCart)
    // found: index! == -1id\
    if (index > -1) {
      //currentCart[index].amount++
      setProductName('已加入過此商品')
      handleShow()
      return
    } else {
      currentCart.push(item)
    }

    localStorage.setItem('cart', JSON.stringify(currentCart))

    // 設定資料
    setMycart(currentCart)
    setProductName('產品：' + item.name + '已成功加入購物車')
    handleShow()
  }
  const messageModal = (
    <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false}>
      <Modal.Header closeButton>
        <Modal.Title></Modal.Title>
      </Modal.Header>
      <Modal.Body>{productName} </Modal.Body>
      <Modal.Footer>
        <Button
          className="button55"
          onClick={() => {
            props.history.push('/item-list')
          }}
        >
          繼續購物
        </Button>
        <Button
          className="button66"
          variant="primary"
          onClick={() => {
            props.history.push('/Shoppingcart1')
          }}
        >
          前往結帳
        </Button>
      </Modal.Footer>
    </Modal>
  )
  const display = (
    <>
      <div className="itemDetail">
        <div className="container">
          <div className="itemDetail-card-body row">
            <div className="itemDetail-left text-center ">
              <div className="itemDetailA mb-1">
                <img src={itemImage} alt="" />
              </div>
              <div className="container">
                <div className="row ddd itemDetailB">
                  <div>
                    <img
                      src={leftImage}
                      style={{ marginTop: '33px', paddingRight: '5px' }}
                      alt=""
                    />
                  </div>
                  <div>

                    <img src={itemImage} style={midImage} alt="" />
                  </div>
                  <div>
                    <img src={itemImage1} style={midImage} alt="" />
                  </div>
                  <div>
                    <img src={itemImage2} style={midImage} alt="" />
                  </div>
                  <div>
                    <img src={itemImage1} style={midImage} alt="" />
                  </div>
                  <div>
                    <img src={itemImage2} style={midImage} alt="" />
                  </div>
                  <div>
                    <img
                      src={rightImage}
                      style={{ marginTop: '33px', paddingLeft: '5px' }}
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* <div className="row">
                <div className="">
                  <div className="">
                    <div className="divimg" id="img1">
                      <img src={itemImage} className="bigimg3 active" alt="" />
                    </div>
                    <div className="divimg" id="img2">
                      <img src={itemImage1} className="bigimg3" alt="" />
                    </div>
                    <div className="divimg" id="img3">
                      <img src={itemImage2} className="bigimg3" alt="" />
                    </div>
                    <div className="divimg" id="img4">
                      <img src={itemImage1} className="bigimg3" alt="" />
                    </div>
                    <div className="divimg" id="img5">
                      <img src={itemImage2} className="bigimg3" alt="" />
                    </div>
                  </div>
                  <div className="smallgroup">
                    <a href="#img">
                      <img
                        src={leftImage}
                        style={{ marginTop: '6px', paddingRight: '10px' }}
                        alt=""
                      />
                    </a>
                    <a href="#img1">
                      <img src={itemImage} className="smallimg" alt="" />
                    </a>
                    <a href="#img2">
                      <img
                        src={itemImage1}
                        className="smallimg"
                        style={midImage}
                        alt=""
                      />
                    </a>
                    <a href="#img3">
                      <img
                        src={itemImage2}
                        className="smallimg"
                        style={midImage}
                        alt=""
                      />
                    </a>
                    <a href="#img4">
                      <img
                        src={itemImage1}
                        className="smallimg"
                        style={midImage}
                        alt=""
                      />
                    </a>
                    <a href="#img5">
                      <img
                        src={itemImage2}
                        className="smallimg"
                        style={midImage}
                        alt=""
                      />
                    </a>
                    <a href="#img">
                      <img
                        src={rightImage}
                        style={{ marginTop: '6px', paddingLeft: '10px' }}
                        alt=""
                      />
                    </a>
                  </div>
                </div>
              </div> */}
            {/* <div id="tab-demo">
                                <ul class="tab-title">
                                    <li><a href="#tab01">tab01</a></li>
                                    <li><a href="#tab02">tab02</a></li>
                                    <li><a href="#tab03">tab03</a></li>
                                </ul>
                                <div id="tab01" class="tab-inner">
                                    <p>tab01的內容</p>
                                </div>
                                <div id="tab02" class="tab-inner">
                                    <p>tab02的內容</p>
                                </div>
                                <div id="tab03" class="tab-inner">
                                    <p>tab03的內容</p>
                                </div>
                            </div> */}

            <div className="itemDetail-middle col-12 col-lg-6">
              <div className="d-flex">
                <div className="info-title p-1">000003</div>
              </div>
              <div className=" d-flex">
                <div className="info-title p-1" style={{ fontSize: '32px' }}>
                  504
                </div>
              </div>
              <div className="d-flex">
                <div className="info-title p-1">
                  ★本遊戲提供504種不同的玩法！
                </div>
              </div>
              <div className="d-flex cardA">
                <div className="card-text1 p-1">定價NT$2890</div>
              </div>
              <div className="d-flex">
                <div className="card-text2 p-1">特價NT$2650</div>
              </div>
              <div className="d-flex cardB">
                {/* <button className="btn1">-</button>
                                    <input type="text" className="input px-0" />
                                    <button className="btn2">+</button> */}
                <ul className="counter1">
                  <li id="minus" className="btn11">
                    <input type="button" onclick="minuser()" value="-" className="button11" />
                  </li>
                  <li id="countnum1" className="btn12">1</li>
                  <li id="plus" className="btn13">
                    <input type="button" onclick="adder()" value="+" className="button13" />
                  </li>
                </ul>

                <button
                  type="button"
                  className="join"
                  onClick={() => {
                    updateCartToLocalStorage({
                      itemId: 101,
                      name: '13道線索',
                      amount: 1,
                      price: 990,

                    })
                  }}
                >
                  加入購物車
                </button>
              </div>
            </div>
            <div className="itemDetail-right">
              <img src={btnFavImage} alt="" />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row itemcontent">
          <p>
            本遊戲提供504種不同的玩法！
            <br />
            九個不同的遊戲模組，造就504種不同的規則組合！
            <br />
            每次遊戲請依序選擇三個不同的模組，第一個模組將決定你的獲勝方式，第二個模組決定你賺錢的方式，
            <br />
            最後一個模組則勾勒遊戲的大致走向，這一共有9x8x7=504種組合！
            <br />
            遊戲提供的九個模組為：物流–在城市之間奔走，運送貨物、競速–試圖先於你的對手達陣、特權–藉由不同特權獲取優勢、
            <br />
            軍事–充滿衝突與戰爭的世界、探索–探索未知的世界、道路–建構你個人的交通網、多數–試著取得多數席次，進行區域控制、
            <br />
            生產–成為貨物生產大王、股權–爭奪各股份有限公司的所有權。
          </p>

          <p>
            作者｜Friedemann Friese
            <br />
            插畫｜Harald Lieske
            <br />
            ★2013 德國年度玩家遊戲獎推薦
            <br />
            ★2013 德國玩家票選最佳遊戲第一名
            <br />
          </p>
        </div>
      </div>
      {/* <div className="container">
                <div className="">
                    <div className="thumbnail text-center">
                        <img src={titleBoxImage} alt="" />
                        <div className="caption">
                            <p className="">相似商品</p>
                        </div>
                    </div>
                </div>
                <div className="row ddd">
                    <div className="card p-0 mr-2 mt-5 col-2" style={itemStyle}>
                        <img src={itemImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">目擊者之夜</h5>
                            <p className="card-text1">定價NT$490</p>
                            <p className="card-text2">特價NT$390</p>
                            <div className="heartcart">
                                <img src={heartImage} className="mr-4" alt="..." />
                                <img src={cartImage} className="mr-3" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card p-0 mr-2 mt-5 col-2" style={itemStyle}>
                        <img src={itemImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">目擊者之夜</h5>
                            <p className="card-text1">定價NT$490</p>
                            <p className="card-text2">特價NT$390</p>
                            <div className="heartcart">
                                <img src={heartImage} className="mr-4" alt="..." />
                                <img src={cartImage} className="mr-3" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card p-0 mr-2 mt-5 col-2" style={itemStyle}>
                        <img src={itemImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">目擊者之夜</h5>
                            <p className="card-text1">定價NT$490</p>
                            <p className="card-text2">特價NT$390</p>
                            <div className="heartcart">
                                <img src={heartImage} className="mr-4" alt="..." />
                                <img src={cartImage} className="mr-3" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="card p-0 mr-2 mt-5 col-2" style={itemStyle}>
                        <img src={itemImage} className="card-img-top" alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">目擊者之夜</h5>
                            <p className="card-text1">定價NT$490</p>
                            <p className="card-text2">特價NT$390</p>
                            <div className="heartcart">
                                <img src={heartImage} className="mr-4" alt="..." />
                                <img src={cartImage} className="mr-3" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}
      <div className="container">
        <div className="">
          <div className="thumbnail text-center">
            <img src={titleBoxImage} alt="" />
            <div className="caption">
              <p className="">相似商品</p>
            </div>
          </div>
        </div>
        <div className="step1">
          <div className="row step2">
            <div className="pic">
              <a href="/item-detail5">
                <ItemCard step={item5} />
              </a>
            </div>
            <div className="pic">
              <a href="/item-detail6">
                <ItemCard step={item6} />
              </a>
            </div>
            <div className="pic">
              <a href="/item-detail7">
                <ItemCard step={item7} />
              </a>
            </div>
            <div className="pic">
              <a href="/item-detail8">
                <ItemCard step={item8} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
  return (
    <>
      {messageModal}
      {display}
    </>
  )
}

export default withRouter(ItemDetail3)
