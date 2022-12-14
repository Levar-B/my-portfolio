import './globals.css';
import Link from 'next/link';
export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<head>
				<title> Levar </title>
				<meta name="description" content="Levar's portfolio using Nextjs" />
				<link rel="icon" href="/favicon.ico" />
			</head>
			<body>
				<nav>
					<div className="menu">
						<Link href="/">
							<span> Home </span>
						</Link>
						<Link href="/projects">
							<span> Projects </span>
						</Link>
						<Link href="/aboutme">
							<span> AboutMe </span>
						</Link>
						<Link href="/contact">
							<span> contact </span>
						</Link>
					</div>
				</nav>

				{children}
			</body>
		</html>
	);
}
