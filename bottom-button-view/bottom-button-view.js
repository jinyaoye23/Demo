Component({
  mixins: [],
  data: {
    position: 'topLeft',
    show: false,
    showMask: false,
  },
  props: {},
  didMount() {
    let { data } = this.props;
    if (!!data && data.length > 2) {
      this.setData({
        bottomButtons: data.splice(0, 2),
        moreButtons: data.splice(0, data.length),
      })
    }
  },
  didUpdate() {
    // debugger
    console.log(this.props.data)
    let { data } = this.props;
    if (!!data && data.length > 2) {
      this.setData({
        bottomButtons: data.splice(0, 2),
        moreButtons: data.splice(0, data.length),
      })
    }
  },
  didUnmount() { },
  methods: {

    onMaskClick() {
      this.setData({
        show: false,
      });
    },
    onMoreButtonClick() {
      this.setData({
        show: !this.data.show,
      });
    },
    itemTap(e) {
      let item = e.currentTarget.dataset.item;
      // debugger
      let page = getCurrentPages().reverse()[0]
      page.data.buttons.forEach(value => {
        if (value.name == item.name) {
          value.onPress();
        }
      })
      // console.log(e)
      this.setData({
        show: false,
      })
    },
    closePopbgView() {
      this.setData({
        show: false,
      })
    }
  },
});
