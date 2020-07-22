import jsApiList from '@/config/wx-api';

const WX_CONFIG = {
  debug: false,
  appId: '',
  timestamp: '',
  nonceStr: '',
  signature: '',
  jsApiList
};

wx.config(WX_CONFIG);
