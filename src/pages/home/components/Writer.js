import React, { PureComponent } from 'react';
import {
  DownItem,
  DownCode,
  DownRight,
  DownTitle,
  DownDesc,
  WriterHeader,
  WriterButton,
  WriterItem,
  WriterInfo
} from '../style';
import connect from "react-redux/es/connect/connect";

class Writer extends PureComponent {
  render() {
    return (
      <div>
        <DownItem>
          <DownCode/>
          <DownRight>
            <DownTitle>下载简书手机APP ></DownTitle>
            <DownDesc>随时随地发现和创内容</DownDesc>
          </DownRight>
        </DownItem>

        <WriterHeader>推荐作者</WriterHeader>
        {
          this.props.list.map((item, index) => {
            return (
              <WriterItem key={index}>
                <img className='pic' src={item.get('writerPic')} alt=""/>
                <WriterInfo>
                  <p className='name'>{item.get('writerName')}</p>
                  <p className='desc'>{item.get('writerDesc')}</p>
                </WriterInfo>
              </WriterItem>
            )
          })
        }
        <WriterButton>查看全部 ></WriterButton>
      </div>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'writerList']),
});

export default connect(mapState, null)(Writer);