CREATE TABLE `posts` (
	`id` integer PRIMARY KEY NOT NULL,
	`title` text NOT NULL,
	`content` text,
	`summary` text,
	`created_at` integer NOT NULL default (strftime('%s', 'now')),
);
