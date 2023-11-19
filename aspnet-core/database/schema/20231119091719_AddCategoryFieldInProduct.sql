BEGIN TRANSACTION;
GO

ALTER TABLE [AppProducts] ADD [CategoryName] nvarchar(50) NULL;
GO

ALTER TABLE [AppProducts] ADD [CategorySlug] nvarchar(50) NULL;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20231119091719_AddCategoryFieldInProduct', N'7.0.10');
GO

COMMIT;
GO

