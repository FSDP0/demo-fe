<template>
	<div class="board-write">
		<!-- <nav>
			<div class="nav-box">
				<ul>
					<li><a href="notice">Notice</a></li>
					<li><a href="sample">Sample</a></li>
				</ul>
			</div>
		</nav> -->
		<hr />
		<main>
			<form class="write-article" method="POST">
				<label for="ftitle">Title</label><br />
				<input type="text" id="title" placeholder="Input Title Here" required />
				<hr style="width: 80%" />
				<label for="farticle">Article</label><br />
				<!-- <input type="text" id="article" placeholder="Input Article Here" /> -->
				<textarea
					cols="40"
					rows="10"
					id="article"
					placeholder="Input Article Here"
				></textarea>
				<br />
				<label for="ftags">Tags</label><br />
				<input type="text" id="tags" placeholder="Input Tags Here" />
				<br />
				<input type="submit" value="Submit" />
				<input type="reset" value="Cancel" />
			</form>
		</main>
	</div>
</template>

<script></script>
<style>
* {
	font-size: 16px;
	font-family: D2Coding;
}

hr {
	margin-top: 5px;
	margin-bottom: 5px;
}

label {
	position: relative;

	text-align: left;
}

#title {
	width: 70%;
	height: 30px;

	padding: 10px;

	margin-top: 10px;
	margin-bottom: 10px;
}

#article {
	resize: none;

	width: 70%;
	height: 300px;

	padding: 10px;

	margin-top: 10px;
	margin-bottom: 10px;
}

#tags {
	width: 70%;
	height: 25px;

	padding: 10px;

	margin-top: 10px;
	margin-bottom: 10px;
}
</style>
