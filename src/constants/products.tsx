import walpay1 from "public/images/Walpay-1.png";
import walpay2 from "public/images/Walpay-2.png";
import walpay3 from "public/images/Walpay-3.png";
import walpay4 from "public/images/Walpay-4.png";
import ss1 from "public/images/Screenshot from 2025-08-27 03-44-42.png";
import ss2 from "public/images/Screenshot from 2025-08-27 03-48-26.png";
import ss3 from "public/images/Screenshot from 2025-08-27 03-53-40.png";
import ss4 from "public/images/Screenshot from 2025-08-27 04-00-34.png";
import ss5 from "public/images/Screenshot from 2025-08-27 04-01-00.png";
import ss6 from "public/images/Screenshot from 2025-08-27 04-01-39.png";
import { Heading } from "@/components/Heading";
import { Paragraph } from "@/components/Paragraph";

export const products = [
	{
		href: "https://github.com/shatadalsamui/WALPAY",
		title: "WalPay",
		description:
			"WalPay is a scalable, secure digital wallet platform built as a Turborepo monorepo. Supporting 50,000+ users and 10,000+ daily sessions, it delivers real-time P2P payments, robust compliance, and seamless user experience for modern businesses.",
		thumbnail: walpay1,
		images: [walpay1, walpay2, walpay3, walpay4, ss1, ss2, ss3, ss4, ss5, ss6],
		slug: "walpay",
		content: (
			<div>
				<Paragraph className="mb-16 text-neutral-700">
					<span className="font-semibold">Tech Stack:</span> React.js, TypeScript, Node.js, Express, Next.js, PostgreSQL, Prisma, AWS, Docker, Turborepo
				</Paragraph>
				<Paragraph className="mb-4 text-neutral-700">
					WalPay is a scalable, secure digital wallet platform built as a Turborepo monorepo. Supporting 50,000+ users and 10,000+ daily sessions, it delivers real-time P2P payments, robust compliance, and seamless user experience for modern businesses.
				</Paragraph>
				<Paragraph className="mb-2">
					<span className="font-semibold">GitHub:</span>{' '}
					<a
						href="https://github.com/shatadalsamui/WALPAY"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:underline"
					>
						github.com/shatadalsamui/WALPAY
					</a>
				</Paragraph>
				<a
					href="https://drive.google.com/file/d/1iempY_yep6et2r3owW4-TeNuoy_AFtKM/view?usp=drive_link"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded font-semibold shadow hover:bg-blue-700 transition"
				>
					View Presentation / Demo
				</a>
				<Paragraph className="mb-4 mt-16">
					<span className="font-semibold">Backend Architecture & Security Highlights:</span> WalPay&apos;s backend is engineered for secure, reliable, and compliant financial operations. Key features include webhook handling with secret verification, atomic transactions and row-level locking, balance capping, robust Zod validation, and secure session management with NextAuth.js.
				</Paragraph>
				<Heading as="h4" className="font-bold text-lg mb-2 mt-8">
					Backend Architecture Details
				</Heading>
				<ul className="list-disc pl-6 mb-6 text-neutral-700">
					<li>
						<span className="font-semibold">Webhook Handling:</span> Dedicated Express.js server processes secure bank webhooks for deposits and withdrawals. Webhooks are protected with a secret header (<code>x-webhook-secret</code>), and all balance updates are atomic.
						<ul className="list-disc pl-6 mt-2">
							<li>
								<span className="font-semibold">Deposit Webhook:</span> Updates user balance and transaction status to &quot;Success&quot; only after verifying the bank&apos;s confirmation and preventing duplicates.
							</li>
							<li>
								<span className="font-semibold">Withdrawal Webhook:</span> Updates withdrawal status to &quot;COMPLETED&quot; or &quot;FAILED&quot; and manages locked balances accordingly.
							</li>
						</ul>
					</li>
					<li>
						<span className="font-semibold">Atomic Transactions & Balance Locking:</span> All multi-step database operations use <code>prisma.$transaction()</code> for integrity. Row-level locking (via <code>FOR UPDATE</code>) prevents race conditions in P2P transfers and withdrawals.
						<ul className="list-disc pl-6 mt-2">
							<li>Sender&apos;s and receiver&apos;s balances are updated atomically in P2P transfers.</li>
							<li>Withdrawals lock the user&apos;s balance until the bank confirms the outcome.</li>
						</ul>
					</li>
					<li>
						<span className="font-semibold">Balance Capping:</span> Enforces a ₹1,00,000 maximum wallet balance per user. All deposits and transfers are validated to prevent exceeding this limit, ensuring compliance and risk mitigation.
					</li>
					<li>
						<span className="font-semibold">Robust Input Validation:</span> Zod schemas validate all API and client inputs, covering length, format, and value constraints. This defends against invalid or malicious data and improves user experience.
					</li>
					<li>
						<span className="font-semibold">NextAuth Session Management:</span> NextAuth.js manages authentication and sessions, using CredentialsProvider for email/password and OTP flows. JWT/session callbacks add user info and ensure type safety throughout the stack.
					</li>
				</ul>
				<Paragraph className="mb-4">
					WalPay is a modern, wallet-based payment platform designed for seamless transactions between users. Built as a monorepo using Turborepo, it leverages Next.js, Prisma, and a modular package structure for scalability and maintainability.
				</Paragraph>
				<Heading as="h4" className="font-bold text-lg mb-2 mt-8">
					Key Achievements
				</Heading>
				<ul className="list-disc pl-6 mb-4 text-neutral-700 mt-6">
					<li>Developed a comprehensive digital wallet system supporting 50,000+ users and 10,000+ daily sessions.</li>
					<li>Architected monorepo with Turborepo, reducing build times by 50% and optimizing codebase management.</li>
					<li>Built core features with TypeScript and React, delivering a responsive, secure UI and reusable component library (20+ components, 25% faster load times).</li>
					<li>Designed Node.js backend services for secure transaction processing and API integrations, achieving 99.9% uptime.</li>
					<li>Integrated PostgreSQL with Prisma ORM for efficient, secure data management (1,000 queries/minute).</li>
					<li>Enforced code quality with ESLint/Prettier, achieving 30% faster compilation and deployment.</li>
				</ul>
				<Heading as="h4" className="font-bold text-lg mb-2">
					Architecture & Project Structure
				</Heading>
				<Paragraph className="mb-2">Monorepo managed with Turborepo:</Paragraph>
				<pre className="bg-gray-50 rounded p-3 text-xs overflow-x-auto mb-4 text-neutral-700">
					{`apps/
  user-app/        # Next.js customer app (auth, dashboard, API)
  landing-page/    # Marketing site
  bank-webhook/    # Bank integration service
packages/
  db/              # Prisma models & migrations
  ui/              # Shared React components
  store/           # State management
  eslint-config/   # Shared lint config
  typescript-config/ # Shared TS config
`}
				</pre>
				<Heading as="h4" className="font-bold text-lg mb-2">
					Key Features
				</Heading>
				<ul className="list-disc pl-6 mb-4 text-neutral-700">
					<li>Deposit/withdrawal to/from bank, P2P transfer, transaction history, and balance management.</li>
					<li>Secure authentication (phone/email + password, OTP verification, password policy enforcement).</li>
					<li>Bank integration via webhook endpoints for deposit/withdrawal status updates.</li>
					<li>Robust error handling for all financial operations.</li>
				</ul>
				<Heading as="h4" className="font-bold text-lg mb-2">
					Setup & Deployment
				</Heading>
				<Paragraph className="mb-2">
					Node.js v16+, PostgreSQL, Docker (optional). See{' '}
					<a
						href="https://github.com/shatadalsamui/WALPAY"
						target="_blank"
						rel="noopener noreferrer"
						className="text-blue-600 hover:underline"
					>
						GitHub
					</a>{' '}
					for full instructions.
				</Paragraph>
				<ul className="list-disc pl-6 mb-4 text-neutral-700">
					<li>Clone repo, install dependencies, configure environment, run migrations, and start dev server.</li>
					<li>CI/CD with GitHub Actions and Docker for automated builds, tests, and deployments.</li>
				</ul>
				<Paragraph className="text-sm text-neutral-500 mb-2">2025 – Present</Paragraph>
			</div>
		),
	},
];
