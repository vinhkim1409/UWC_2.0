import React, { Component } from 'react'
import "./footer.scss"

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <div className="text1">@2022UWC2.0</div>
                    <a href = '/' className="text2">Quy chế sử dụng</a>
                    <a href = '/' className="text3">Chính sách bảo mật</a>
            </footer>
        )
    }
}
