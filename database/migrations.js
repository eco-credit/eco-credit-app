export const migrations = () => {
    return (
        "create table `users` (`id` bigint unsigned not null auto_increment primary key, `first_name` varchar(255) not null, `last_name` varchar(255) null, `email` varchar(255) null, `email_verified_at` timestamp null, `password` varchar(255) null, `organisation_id` bigint unsigned null, `project_id` bigint unsigned null, `field_officer_id` bigint unsigned null, `role_id` bigint unsigned not null, `billing_address` text null, `analyst` tinyint(1) null, `unique_identifier` varchar(255) null, `group` varchar(255) null, `product` varchar(255) null, `consent` tinyint(1) not null default '0', `data_processing` tinyint(1) not null default '0', `data_sharing` tinyint(1) not null default '0', `email_list` tinyint(1) not null default '0', `gender` varchar(255) null, `dob` varchar(255) null, `telephone_number` varchar(255) null, `code` varchar(255) not null, `position` varchar(255) null, `livelihood` varchar(255) null, `pin` varchar(255) null, `import_timestamp` varchar(255) null, `suspended` tinyint(1) not null default '0', `type` tinyint(1) not null default '0', `remember_token` varchar(100) null, `deleted_at` timestamp null, `created_at` timestamp null, `updated_at` timestamp null)';"
        +
        "alter table `users` add index `users_organisation_id_index`(`organisation_id`);"
        +
        "alter table `users` add index `users_project_id_index`(`project_id`);"
        +
        "alter table `users` add index `users_field_officer_id_index`(`field_officer_id`);"
        +
        "alter table `users` add index `users_role_id_index`(`role_id`);"
        +
        "create table `projects` (`id` bigint unsigned not null auto_increment primary key, `organisation_id` bigint unsigned null, `project_manager_id` bigint unsigned null, `name` varchar(255) not null, `location` varchar(255) null, `funding_basis` varchar(20) not null, `reference_number` varchar(255) null, `target_sector` varchar(255) null, `created_by` bigint unsigned not null, `code` varchar(255) not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate ''utf8mb4_unicode_ci'';"
        +
        "alter table`projects` add index`projects_organisation_id_index`(`organisation_id`);"
        +
        "alter table `projects` add index `projects_project_manager_id_index`(`project_manager_id`);"
        +
        "alter table `projects` add index `projects_created_by_index`(`created_by`);"
        +
        "create table `milestones` (`id` bigint unsigned not null auto_increment primary key, `project_id` bigint unsigned not null, `name` varchar(255) null, `requirement` varchar(255) null, `time` varchar(255) null, `term_index` varchar(255) null, `to_review` tinyint(1) not null default ''0'', `code` varchar(255) not null, `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate ''utf8mb4_unicode_ci'';"
        +
        "alter table `milestones` add index `milestones_project_id_index`(`project_id`)"
        +
        "create table `organisations` (`id` bigint unsigned not null auto_increment primary key, `name` varchar(255) not null, `logo` varchar(255) null, `type` tinyint(1) not null default ''0'', `created_at` timestamp null, `updated_at` timestamp null) default character set utf8mb4 collate ''utf8mb4_unicode_ci'';"
        +
        "alter table `organisations` add `currency` text null;"
    )
}