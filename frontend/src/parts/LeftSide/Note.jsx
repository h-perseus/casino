import styled from 'styled-components';
import cancel_image from '../../assets/img/cancel.png';
import modal_back_image from '../../assets/img/modal_back.png';
import corner_lefttop_image from '../../assets/img/corner_lefttop.png';
import corner_rightbottom_image from '../../assets/img/corner_rightbottom.png';
import modal_logo_image from '../../assets/img/modal_logo.png';
import modal_title_note_image from '../../assets/img/modal_title_note.png';
import modal_desc_note_image from '../../assets/img/modal_desc_note.png';
import modal_top_note_image from '../../assets/img/modal_top_note.png';
import modal_top_sep_line_image from '../../assets/img/modal_top_sep_line.png';


const Holder = styled.div`
    max-width: 890px;
    margin: 30px auto;
    position: relative;
    padding: 30px 40px 40px;
    flex-basis: 100%;
    .list-bg{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
        max-width: 100%;
        height: 100%;
    }
    .c-top-left {
        position: absolute;
        top: 0;
        left: 0;
        max-width: 145px;
    }
    .c-bottom-right {
        position: absolute;
        bottom: 0;
        right: 0;
        max-width: 124px;
    }
    .hd-part-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        position: relative;
        margin-bottom: 10px;
        .lf-part-wrap {
            display: grid;
            grid-template-columns: 80px auto;
            align-items: center;
        }
        .l_go img {
            width: 80px;
        }
        .ttl-div .m-title {
            margin-bottom: 5px;
            max-height: 36px;
        }
        .ttl-div .desc_note {
            max-height: 25px;
        }
        .lr-part-wrap img {
            max-height: 155px;
        }
    }
    .hd-part-wrapper::after {
        content: "";
        background-image: url(${modal_top_sep_line_image});;
        width: 100%;
        height: 1px;
        position: absolute;
        bottom: 0;
        left: 0;
        right: 0;
    }
    .table.border {
        border: 1px solid #321c39 !important;
    }
    .table td {
        border-right: 0px;
    }
    .money-list-table-wrapper {
        max-height: 480px;
        overflow: auto;
        scrollbar-width: thin !important;
        scrollbar-color: #321c39 transparent !important;
    }
`;

const Button = styled.a`
    img {
        max-width: 100%;
        width: 105px;
        &:last-child{
            display: none;
        }
    }
    &:hover {
        img:last-child{
            display: block;
        }
        img:first-child{
            display: none;
        }
    }
`

function Note(props) {
    
    return (
        <Holder>
            <img className="list-bg" src={modal_back_image} />
            <img className="c-top-left" src={corner_lefttop_image} />
            <img className="c-bottom-right" src={corner_rightbottom_image} />
            <div className="relative z-1">
                <div className="hd-part-wrapper">
                    <div className="lf-part-wrap">
                        <a href="#" className="l_go"><img src={modal_logo_image} alt=""/></a>
                        <div className="ttl-div">
                            <img src={modal_title_note_image} alt="" className="m-title"/> <br/>
                            <img src={modal_desc_note_image} alt="" className="desc_note"/>
                        </div>
                    </div>
                    <div className="lr-part-wrap">
                        <img src={modal_top_note_image} alt=""/>
                    </div>
                </div>
                <div className="money-list-table-wrapper">
                    <table className="table border table-auto w-full">
                        <thead>
                            <tr>
                                <th>번 호</th>
                                <th>제 목</th>
                                <th>상 태</th>
                                <th>날 짜</th>
                            </tr>
                            <tr>
                                <td colspan="4" height="7" bgcolor="#5b3567"></td>
                            </tr>
                        </thead>
                        <tbody id="customer-content" className="notice_4">
                            <tr>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <div className="flex justify-center items-center pt-[25px]">
                    <a data-dismiss="modal" className="w-[112px] h-[36px]" href="#" onClick={props.close}><img src={cancel_image} alt=""/></a>
                </div>
            </div>
        </Holder>
    );
}
  
export default Note;
  