BEGIN TRANSACTION;
GO

DECLARE @var0 sysname;
SELECT @var0 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[AppProducts]') AND [c].[name] = N'ThumbnailPicture');
IF @var0 IS NOT NULL EXEC(N'ALTER TABLE [AppProducts] DROP CONSTRAINT [' + @var0 + '];');
ALTER TABLE [AppProducts] ALTER COLUMN [ThumbnailPicture] nvarchar(250) NULL;
GO

DECLARE @var1 sysname;
SELECT @var1 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[AppProducts]') AND [c].[name] = N'SeoMetaDescription');
IF @var1 IS NOT NULL EXEC(N'ALTER TABLE [AppProducts] DROP CONSTRAINT [' + @var1 + '];');
ALTER TABLE [AppProducts] ALTER COLUMN [SeoMetaDescription] nvarchar(250) NULL;
GO

DECLARE @var2 sysname;
SELECT @var2 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[AppProducts]') AND [c].[name] = N'Description');
IF @var2 IS NOT NULL EXEC(N'ALTER TABLE [AppProducts] DROP CONSTRAINT [' + @var2 + '];');
ALTER TABLE [AppProducts] ALTER COLUMN [Description] nvarchar(max) NULL;
GO

DECLARE @var3 sysname;
SELECT @var3 = [d].[name]
FROM [sys].[default_constraints] [d]
INNER JOIN [sys].[columns] [c] ON [d].[parent_column_id] = [c].[column_id] AND [d].[parent_object_id] = [c].[object_id]
WHERE ([d].[parent_object_id] = OBJECT_ID(N'[AppManufacturers]') AND [c].[name] = N'CoverPicture');
IF @var3 IS NOT NULL EXEC(N'ALTER TABLE [AppManufacturers] DROP CONSTRAINT [' + @var3 + '];');
ALTER TABLE [AppManufacturers] ALTER COLUMN [CoverPicture] nvarchar(250) NULL;
GO

INSERT INTO [__EFMigrationsHistory] ([MigrationId], [ProductVersion])
VALUES (N'20231119075923_ChangeNullableProductsSpecificField', N'7.0.10');
GO

COMMIT;
GO

