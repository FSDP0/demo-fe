<template>
	<div class="board_wrap">
		<div class="board_title">
			<strong>OSC Korea</strong>
			<p>Board Edit</p>
		</div>
		<div class="board_write_wrap">
			<div class="board_write">
				<div class="title">
					<dl>
						<dt><h2>Title</h2></dt>
						<dd>
							<input
								type="text"
								id="postTitle"
								placeholder="Input Title Here"
								required
							/>
						</dd>
					</dl>
				</div>
				<div class="info">
					<dl>
						<dt><h2>Tag</h2></dt>
						<dd>
							<input type="text" id="postTag" placeholder="Input Tag Here" />
						</dd>
					</dl>
					<dl>
						<dt><h2>Writer</h2></dt>
						<dd>
							<input type="text" id="postWriter" placeholder="Input Author" />
						</dd>
					</dl>
				</div>
				<div class="cont">
					<textarea
						id="postArticle"
						placeholder="Input Content Here"
					></textarea>
				</div>
			</div>
			<div class="bt_wrap">
				<a href="#" class="on">Edit</a>
				<RouterLink to="./board_list">Cancel</RouterLink>
			</div>
		</div>
	</div>
</template>

<script lang="ts">
import axios from "axios";

export default {
	data() {
		return {
			originalData: {
				id: Number,
				boardTitle: String,
				boardArticle: String,
				boardTag: String,
				createdDate: Date,
				modDate: Date,
			},
			editData: {
				boardTitle: "",
				boardArticle: "",
				boardTag: "",
			},
		};
	},
	mounted() {
		// axios
		// 	.patch(`http://localhost:8000/board/edit/${this.editData}`, this.editData)
		// 	.then(res => console.log(res));
		axios.get(`http://localhost:8000/board/search/$`).then(res => {
			this.originalData = res.data;
		});
	},
	methods: {
		patchDate() {
			axios
				.patch(
					`http://localhost:8000/board/edit/${this.editData}`,
					this.editData,
				)
				.then(res => console.log(res));
		},
	},
};
</script>

<style>
@import url("../../styles/css.css");
@import url("../../styles/boardWrite.css");
</style>
