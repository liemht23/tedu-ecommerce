USE [TeduEcommerce]
GO

INSERT INTO [dbo].[AppProductCategories]
           ([Id]
           ,[Name]
           ,[Code]
           ,[Slug]
           ,[SortOrder]
           ,[CoverPicture]
           ,[Visibility]
           ,[IsActive]
           ,[ParentId]
           ,[SeoMetaDescription]
           ,[ExtraProperties]
           ,[ConcurrencyStamp]
           ,[CreationTime]
           ,[CreatorId])
     VALUES
           (newid()
           ,'Smart phone'
           ,'C1'
           ,'smart-phone'
           ,1
           ,''
           ,1
           ,1
           ,null
           ,'Smart phone category'
           ,''
           ,''
           ,getdate()
           ,null)
GO
INSERT INTO [dbo].[AppProductCategories]
           ([Id]
           ,[Name]
           ,[Code]
           ,[Slug]
           ,[SortOrder]
           ,[CoverPicture]
           ,[Visibility]
           ,[IsActive]
           ,[ParentId]
           ,[SeoMetaDescription]
           ,[ExtraProperties]
           ,[ConcurrencyStamp]
           ,[CreationTime]
           ,[CreatorId])
     VALUES
           (newid()
           ,'Laptop'
           ,'C2'
           ,'laptop'
           ,1
           ,''
           ,1
           ,1
           ,null
           ,'Laptop category'
           ,''
           ,''
           ,getdate()
           ,null)
