'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = Component({
  behaviors: [],
  properties: {
    value: {
      type: Number,
      value: 0
    },
    count: {
      type: Number,
      value: 5
    },
    size: {
      type: [String, Number],
      value: 44
    },
    color: {
      type: String,
      value: '#e5e5e5'
    },
    activeColor: {
      type: String,
      value: '#fdb757'
    },
    readonly: {
      type: Boolean,
      value: false
    },
    padding: {
      type: Number,
      value: 20
    }
  },
  data: {},
  methods: {
    handlerRate: function handlerRate(e) {
      if (this.data.readonly) {
        return;
      }
      var score = e.target.dataset.score;
      if (score) {
        this.setData({
          value: score
        });
        var detail = e.detail;
        detail.value = score;
        var option = {};
        this.triggerEvent('rate', detail, option);
      }
    }
  }
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImluZGV4Lnd4YyJdLCJuYW1lcyI6WyJiZWhhdmlvcnMiLCJwcm9wZXJ0aWVzIiwidmFsdWUiLCJ0eXBlIiwiTnVtYmVyIiwiY291bnQiLCJzaXplIiwiU3RyaW5nIiwiY29sb3IiLCJhY3RpdmVDb2xvciIsInJlYWRvbmx5IiwiQm9vbGVhbiIsInBhZGRpbmciLCJkYXRhIiwibWV0aG9kcyIsImhhbmRsZXJSYXRlIiwiZSIsInNjb3JlIiwidGFyZ2V0IiwiZGF0YXNldCIsInNldERhdGEiLCJkZXRhaWwiLCJvcHRpb24iLCJ0cmlnZ2VyRXZlbnQiXSwibWFwcGluZ3MiOiI7Ozs7OztBQU1FQSxhQUFXLEU7QUFDWEMsY0FBWTtBQUNWQyxXQUFPO0FBQ0xDLFlBQU1DLE1BREQ7QUFFTEYsYUFBTztBQUZGLEtBREc7QUFLVkcsV0FBTztBQUNMRixZQUFNQyxNQUREO0FBRUxGLGFBQU87QUFGRixLQUxHO0FBU1ZJLFVBQU07QUFDSkgsWUFBTSxDQUFDSSxNQUFELEVBQVNILE1BQVQsQ0FERjtBQUVKRixhQUFPO0FBRkgsS0FUSTtBQWFWTSxXQUFPO0FBQ0xMLFlBQU1JLE1BREQ7QUFFTEwsYUFBTztBQUZGLEtBYkc7QUFpQlZPLGlCQUFhO0FBQ1hOLFlBQU1JLE1BREs7QUFFWEwsYUFBTztBQUZJLEtBakJIO0FBcUJWUSxjQUFVO0FBQ1JQLFlBQU1RLE9BREU7QUFFUlQsYUFBTztBQUZDLEtBckJBO0FBeUJWVSxhQUFTO0FBQ1BULFlBQU1DLE1BREM7QUFFUEYsYUFBTztBQUZBO0FBekJDLEc7QUE4QlpXLFFBQU0sRTtBQUNOQyxXQUFTO0FBQ1BDLGVBRE8sdUJBQ0tDLENBREwsRUFDUTtBQUNiLFVBQUksS0FBS0gsSUFBTCxDQUFVSCxRQUFkLEVBQXdCO0FBQ3RCO0FBQ0Q7QUFDRCxVQUFJTyxRQUFRRCxFQUFFRSxNQUFGLENBQVNDLE9BQVQsQ0FBaUJGLEtBQTdCO0FBQ0EsVUFBSUEsS0FBSixFQUFXO0FBQ1AsYUFBS0csT0FBTCxDQUFhO0FBQ1RsQixpQkFBT2U7QUFERSxTQUFiO0FBR0EsWUFBSUksU0FBU0wsRUFBRUssTUFBZjtBQUNBQSxlQUFPbkIsS0FBUCxHQUFlZSxLQUFmO0FBQ0EsWUFBSUssU0FBUyxFQUFiO0FBQ0EsYUFBS0MsWUFBTCxDQUFrQixNQUFsQixFQUEwQkYsTUFBMUIsRUFBa0NDLE1BQWxDO0FBQ0g7QUFDRjtBQWZNIiwiZmlsZSI6ImluZGV4Lnd4YyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IHtcbiAgY29uZmlnOiB7XG4gICAgdXNpbmdDb21wb25lbnRzOiB7XG4gICAgICAnd3hjLWljb24nOiAnQG1pbnVpL3d4Yy1pY29uJ1xuICAgIH1cbiAgfSxcbiAgYmVoYXZpb3JzOiBbIF0sXG4gIHByb3BlcnRpZXM6IHtcbiAgICB2YWx1ZToge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDBcbiAgICB9LFxuICAgIGNvdW50OiB7XG4gICAgICB0eXBlOiBOdW1iZXIsXG4gICAgICB2YWx1ZTogNVxuICAgIH0sXG4gICAgc2l6ZToge1xuICAgICAgdHlwZTogW1N0cmluZywgTnVtYmVyXSxcbiAgICAgIHZhbHVlOiA0NFxuICAgIH0sXG4gICAgY29sb3I6IHtcbiAgICAgIHR5cGU6IFN0cmluZyxcbiAgICAgIHZhbHVlOiAnI2U1ZTVlNSdcbiAgICB9LFxuICAgIGFjdGl2ZUNvbG9yOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICB2YWx1ZTogJyNmZGI3NTcnXG4gICAgfSxcbiAgICByZWFkb25seToge1xuICAgICAgdHlwZTogQm9vbGVhbixcbiAgICAgIHZhbHVlOiBmYWxzZVxuICAgIH0sXG4gICAgcGFkZGluZzoge1xuICAgICAgdHlwZTogTnVtYmVyLFxuICAgICAgdmFsdWU6IDIwXG4gICAgfVxuICB9LFxuICBkYXRhOiB7IH0sXG4gIG1ldGhvZHM6IHtcbiAgICBoYW5kbGVyUmF0ZShlKSB7XG4gICAgICBpZiAodGhpcy5kYXRhLnJlYWRvbmx5KSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGxldCBzY29yZSA9IGUudGFyZ2V0LmRhdGFzZXQuc2NvcmU7XG4gICAgICBpZiAoc2NvcmUpIHtcbiAgICAgICAgICB0aGlzLnNldERhdGEoe1xuICAgICAgICAgICAgICB2YWx1ZTogc2NvcmVcbiAgICAgICAgICB9KTtcbiAgICAgICAgICBsZXQgZGV0YWlsID0gZS5kZXRhaWw7XG4gICAgICAgICAgZGV0YWlsLnZhbHVlID0gc2NvcmU7XG4gICAgICAgICAgbGV0IG9wdGlvbiA9IHt9O1xuICAgICAgICAgIHRoaXMudHJpZ2dlckV2ZW50KCdyYXRlJywgZGV0YWlsLCBvcHRpb24pO1xuICAgICAgfVxuICAgIH1cbiAgfVxufSJdfQ==