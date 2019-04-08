import React, { Component } from 'react';


export default class Footer extends Component {


    render() {
        return (
            <section className="footer_bottom">
            <div className="container-flex">
                <div className="row">
                    <div className="col-lg-6 ">
                        <p className="copyright">&copy; {(new Date().getFullYear())} Yusjib Industrial Medicare  | Powered by Ojulari Abdulkabir Tola</p>
                    </div>


                </div>
            </div>
        </section>
        );
    }
}

