<script lang="ts">
	import ExpCard from '$lib/components/ExpCard.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Section from '$lib/components/Section.svelte';

	const jobs = [
		{
			id: 1,
			duration: '2021 - 2022',
			durationLabel: '2021 to 2022',
			company: 'QPAX',
			description:
				'NCAP stands for No Contact Apprehension Policy. Instead of the usual human enforcers, NCAP uses CCTVs, digital cameras, and other related technology to record images and videos of motorists violating traffic rules, regulations, and laws.',
			jobTitle: 'Backend Developer',
			position: 'Mid Software Engineer',
			technologies: ['Laravel', 'VueJS']
		},
		{
			id: 2,
			duration: '2021 - 2022',
			durationLabel: '2021 to 2022',
			company: 'Legacy Seller',
			description:
				'Developed and styled Job listing web app, including Indeed integration for job post and SocketIO for chat.',
			jobTitle: 'Backend Developer',
			position: 'Mid Software Engineer',
			technologies: ['Laravel', 'VueJS', 'JavaScript', 'TailwindCSS']
		},
		{
			id: 3,
			duration: '2020 - 2021',
			durationLabel: '2020 to 2021',
			company: 'Zgetcare',
			description:
				'Worked with the UI team to engineer and improve features of Senior Healthcare web application.',
			jobTitle: 'Frontend Developer',
			position: 'Junior Software Engineer',
			technologies: ['HTML', 'VueJS', 'JavaScript', 'CSS']
		},
		{
			id: 4,
			duration: '2015 - 2019',
			durationLabel: '2015 to 2019',
			company: 'Cloudstaff Inc.',
			description:
				'Developed, maintained, and shipped a desktop monitoring application for cloudstaff clients.',
			jobTitle: 'Software Engineer',
			position: 'Junior Software Engineer',
			technologies: ['CakePHP', 'JavaFX']
		}
	];
</script>

<main class="pt-24 lg:w-1/2 lg:py-24">
	<Section title="about" label="About me">
		<div>
			<p class="mb-4">
				My main focus is to be a fullstack developer and build fast and scalable web applications
				using the latest technologies. In my free time I'm also watching courses that I took on
				udemy.
			</p>
		</div>
	</Section>
	<Section title="experience" label="Work experience">
		<ol class="group/list">
			{#each jobs as job (job.id)}
				<li class="mb-12">
					<ExpCard {...job} />
				</li>
			{/each}
		</ol>
	</Section>
	<Footer />
</main>
