﻿using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TeduEcommerce.Migrations
{
    /// <inheritdoc />
    public partial class AddSellPriceProduct : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<double>(
                name: "SellPrice",
                table: "AppProducts",
                type: "float",
                nullable: false,
                defaultValue: 0.0);
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "SellPrice",
                table: "AppProducts");
        }
    }
}
