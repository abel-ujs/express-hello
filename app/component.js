var ReactDOM = require('react-dom');
var React = require('react');
var $= require('jquery');

var CommentBox = React.createClass({
	getInitialState:function(){
		return {data:[]};
	},
	componentDidMount:function(){
		var that = this;
	this.setState({data:[
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
]})
		/*$.getJSON("data.js",function(_data){
			that.setState({data:[
  {id: 1, author: "Pete Hunt", text: "This is one comment"},
  {id: 2, author: "Jordan Walke", text: "This is *another* comment"}
]})
		})*/

		$.ajax({
      url: "./data.json",
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({data: [{id: 1, author: "Pete Hunt", text: "This is one comment"},{id: 2, author: "Jordan Walke", text: "This is *another* comment"}]});
      }.bind(this),
      error: function(err) {
        console.dir(err.toString());
      }.bind(this)
    });
 
	},
	render:function(){
		return (
			<div>
				<CommentList data={this.state.data}/>
				<CommentForm />
			</div>
			
			)
	}
})
var CommentList = React.createClass({
	render:function(){
		
		var nodes = this.props.data.map(function(comment){

			return (
					<Comment author={comment.author} key={comment.id}>comment.text</Comment>
				)
		})
		return (
			<div>
				{nodes}
			</div>
			)
	}
})
var CommentForm = React.createClass({
	render:function(){
		return (
			<div>comment form</div>
			)
	}
})

var Comment = React.createClass({
	render:function(){
		return (
			<div>
			{this.props.author}
			{this.props.children}
		</div>
		)

	}
})

ReactDOM.render(<CommentBox />,document.getElementById("container"));