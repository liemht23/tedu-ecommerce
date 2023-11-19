USE [TeduEcommerce]
GO

INSERT INTO [dbo].[AppManufacturers]
           ([Id]
           ,[Name]
           ,[Code]
           ,[Slug]
           ,[CoverPicture]
           ,[Visibility]
           ,[IsActive]
           ,[Country]
           ,[ExtraProperties]
           ,[ConcurrencyStamp]
           ,[CreationTime]
           ,[CreatorId])
     VALUES
           (newid()
           ,N'Apple'
           ,'M1'
           ,'apple'
           ,''
           ,1
           ,1
           ,'US'
           ,''
           ,''
           ,getdate()
           ,null)

INSERT INTO [dbo].[AppManufacturers]
           ([Id]
           ,[Name]
           ,[Code]
           ,[Slug]
           ,[CoverPicture]
           ,[Visibility]
           ,[IsActive]
           ,[Country]
           ,[ExtraProperties]
           ,[ConcurrencyStamp]
           ,[CreationTime]
           ,[CreatorId])
     VALUES
           (newid()
           ,N'Microsoft'
           ,'M2'
           ,'microsoft'
           ,''
           ,1
           ,1
           ,'US'
           ,''
           ,''
           ,getdate()
           ,null)
